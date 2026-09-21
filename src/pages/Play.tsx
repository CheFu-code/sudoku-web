import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

type Difficulty =
  | "easy"
  | "medium"
  | "hard"
  | "expert"
  | "extreme"
  | "diabolical";
type Cell = { value: number | null; given: boolean; notes: number[] };
type Puzzle = {
  id: string;
  difficulty: Difficulty;
  givens: string;
  solution: string;
};

const puzzles: Puzzle[] = [
  {
    id: "easy-7c1b0686",
    difficulty: "easy",
    givens:
      ".......1.4.........2...........5.4.7..8...3....1.9....3..4..2...5.1........8.6...",
    solution:
      "693784512487512936125963874932651487568247391741398625319475268856129743274836159",
  },
  {
    id: "medium-97d3921f",
    difficulty: "medium",
    givens:
      "1..5.37..6.3..8.9......98...1.......8761..........6...........7.8.9.76.47...6.312",
    solution:
      "198543726643278591527619843914735268876192435235486179462351987381927654759864312",
  },
  {
    id: "hard-8eb02758",
    difficulty: "hard",
    givens:
      "........5.2...9....9..2...373..481.....36....58....4...1...358...42.......978...2",
    solution:
      "473816925628539741195427863732948156941365278586172439217693584864251397359784612",
  },
  {
    id: "expert-722f6e9d",
    difficulty: "expert",
    givens:
      "..5...74.3..6...19.....1..5...7...2.9....58..7..84......3.9...2.9.4.....8.....1.3",
    solution:
      "215983746387654219469271385538716924941325867726849531653198472192437658874562193",
  },
  {
    id: "extreme-1c8b1649",
    difficulty: "extreme",
    givens:
      "8..9........524.....5.1.67..2......45.17....3.......164....8..1....6...7......89.",
    solution:
      "813976425697524138245813679329681754561749283784235916472398561958162347136457892",
  },
  {
    id: "diabolical-1d9a2bfa",
    difficulty: "diabolical",
    givens:
      "8..........36......7..9.2...5...7.......457.....1...3...1....68..85...1..9....4..",
    solution:
      "812753649943682175675491283154237896369845721287169534521974368438526917796318452",
  },
];

const difficulties: Difficulty[] = [
  "easy",
  "medium",
  "hard",
  "expert",
  "extreme",
  "diabolical",
];
const maxMistakes = 3;

function createBoard(puzzle: Puzzle): Cell[] {
  return [...puzzle.givens].map((char) => ({
    value: char === "." ? null : Number(char),
    given: char !== ".",
    notes: [],
  }));
}

function peers(index: number): number[] {
  const row = Math.floor(index / 9);
  const col = index % 9;
  const boxRow = Math.floor(row / 3);
  const boxCol = Math.floor(col / 3);
  return Array.from({ length: 81 }, (_, candidate) => candidate).filter(
    (candidate) => {
      const candidateRow = Math.floor(candidate / 9);
      const candidateCol = candidate % 9;
      return (
        candidate !== index &&
        (candidateRow === row ||
          candidateCol === col ||
          (Math.floor(candidateRow / 3) === boxRow &&
            Math.floor(candidateCol / 3) === boxCol))
      );
    },
  );
}

function formatTime(seconds: number) {
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

export default function Play() {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [puzzle, setPuzzle] = useState(() => puzzles[0]);
  const [board, setBoard] = useState(() => createBoard(puzzles[0]));
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedDigit, setSelectedDigit] = useState<number | null>(null);
  const [pencil, setPencil] = useState(false);
  const [fastMode, setFastMode] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [history, setHistory] = useState<Cell[][]>([]);
  const [hint, setHint] = useState<number | null>(null);

  const status =
    mistakes >= maxMistakes
      ? "lost"
      : board.every(
            (cell, index) => cell.value === Number(puzzle.solution[index]),
          )
        ? "won"
        : "playing";

  useEffect(() => {
    if (status !== "playing" || paused) return;
    const timer = window.setInterval(
      () => setElapsed((value) => value + 1),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [paused, status]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (/^[1-9]$/.test(event.key)) handleDigit(Number(event.key));
      if (event.key === "Backspace" || event.key === "Delete") erase();
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z")
        undo();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const startGame = useCallback(
    (nextDifficulty: Difficulty = difficulty) => {
      const nextPuzzle =
        puzzles.find((item) => item.difficulty === nextDifficulty) ??
        puzzles[0];
      setDifficulty(nextDifficulty);
      setPuzzle(nextPuzzle);
      setBoard(createBoard(nextPuzzle));
      setSelected(null);
      setSelectedDigit(null);
      setMistakes(0);
      setElapsed(0);
      setPaused(false);
      setHistory([]);
      setHint(null);
    },
    [difficulty],
  );

  const commit = (nextBoard: Cell[]) => {
    setHistory((items) => [
      ...items,
      board.map((cell) => ({ ...cell, notes: [...cell.notes] })),
    ]);
    setBoard(nextBoard);
  };

  function handleCell(index: number) {
    if (status !== "playing" || paused) return;
    setSelected(index);
    if (fastMode && selectedDigit !== null) handleDigit(selectedDigit, index);
  }

  function handleDigit(digit: number, target?: number) {
    if (status !== "playing" || paused) return;
    if (fastMode && target === undefined) {
      setSelectedDigit((value) => (value === digit ? null : digit));
      return;
    }
    target ??= selected ?? undefined;
    if (
      target === undefined ||
      board[target].given ||
      (board[target].value !== null && pencil)
    )
      return;
    const nextBoard = board.map((cell) => ({
      ...cell,
      notes: [...cell.notes],
    }));
    const cell = nextBoard[target];
    if (pencil) {
      if (peers(target).some((peer) => nextBoard[peer].value === digit)) return;
      cell.notes = cell.notes.includes(digit)
        ? cell.notes.filter((note) => note !== digit)
        : [...cell.notes, digit].sort();
    } else {
      const isClear = cell.value === digit;
      cell.value = isClear ? null : digit;
      cell.notes = [];
      if (!isClear && digit !== Number(puzzle.solution[target]))
        setMistakes((value) => value + 1);
    }
    commit(nextBoard);
  }

  function erase() {
    if (selected === null || status !== "playing" || board[selected].given)
      return;
    const nextBoard = board.map((cell) => ({
      ...cell,
      notes: [...cell.notes],
    }));
    nextBoard[selected] = { ...nextBoard[selected], value: null, notes: [] };
    commit(nextBoard);
  }

  function undo() {
    const previous = history.at(-1);
    if (!previous) return;
    setBoard(previous);
    setHistory((items) => items.slice(0, -1));
  }

  function useHint() {
    const target = board.findIndex(
      (cell, index) => cell.value !== Number(puzzle.solution[index]),
    );
    if (target >= 0) {
      setHint(target);
      setSelected(target);
    }
  }

  const selectedValue =
    selected !== null ? board[selected].value : selectedDigit;
  const remaining = useMemo(
    () =>
      Array.from(
        { length: 9 },
        (_, index) => board.filter((cell) => cell.value === index + 1).length,
      ),
    [board],
  );

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-5 pb-16 pt-24 text-[#1a1814]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Quiet focus.
            </h1>
            <p className="mt-2 text-[#6b6357]">
              A clean board, one careful move at a time.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Difficulty">
            {difficulties.map((level) => (
              <button
                key={level}
                onClick={() => startGame(level)}
                className={`border px-3 py-2 text-xs font-medium capitalize transition-colors ${difficulty === level ? "border-[#1a1814] bg-[#1a1814] text-[#f5f0e8]" : "border-[#c8c2b4] text-[#6b6357] hover:border-[#1a1814]"}`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
        <main className="grid items-start gap-8 lg:grid-cols-[minmax(420px,600px)_280px] lg:justify-center">
          <section>
            <div className="mb-3 flex items-center justify-between border-y border-[#c8c2b4] py-3 font-mono-custom text-xs uppercase tracking-wider text-[#6b6357]">
              <span>
                {difficulty} / {mistakes} of {maxMistakes} mistakes
              </span>
              <button
                onClick={() => setPaused((value) => !value)}
                disabled={status !== "playing"}
                className="hover:text-[#1a1814]"
              >
                {paused ? "Resume" : "Pause"} · {formatTime(elapsed)}
              </button>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[600px] border-2 border-[#1a1814] bg-[#ede8de] shadow-[8px_8px_0_#c8c2b4]">
              <div className="grid h-full grid-cols-9">
                {board.map((cell, index) => {
                  const row = Math.floor(index / 9);
                  const col = index % 9;
                  const isPeer =
                    selected !== null && peers(selected).includes(index);
                  const same =
                    selectedValue !== null && cell.value === selectedValue;
                  const wrong =
                    !cell.given &&
                    cell.value !== null &&
                    cell.value !== Number(puzzle.solution[index]);
                  return (
                    <button
                      key={index}
                      onClick={() => handleCell(index)}
                      aria-label={`Row ${row + 1}, column ${col + 1}`}
                      className={`relative flex min-h-0 items-center justify-center border-[#c8c2b4] font-mono-custom text-[clamp(0.9rem,3vw,1.45rem)] transition-colors ${col % 3 === 2 && col !== 8 ? "border-r-2 border-r-[#1a1814]" : "border-r"} ${row % 3 === 2 && row !== 8 ? "border-b-2 border-b-[#1a1814]" : "border-b"} ${cell.given ? "font-semibold text-[#1a1814]" : "text-[#c0392b]"} ${index === selected ? "bg-[#1a1814] text-[#f5f0e8]" : same ? "bg-[#e6c9c2]" : isPeer ? "bg-[#e9e0d4]" : (Math.floor(row / 3) + Math.floor(col / 3)) % 2 === 0 ? "bg-[#ede8de]" : "bg-[#f5f0e8]"} ${wrong ? "text-[#c0392b] underline decoration-2" : ""}`}
                    >
                      {cell.value ?? (
                        <span className="grid grid-cols-3 gap-0.5 p-1 text-[clamp(0.35rem,1.1vw,0.55rem)] leading-none text-[#6b6357]">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((note) => (
                            <span key={note}>
                              {cell.notes.includes(note) ? note : ""}
                            </span>
                          ))}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              {paused && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#1a1814]/90 text-center text-[#f5f0e8]">
                  <div>
                    <p className="font-display text-3xl">Paused</p>
                    <button
                      onClick={() => setPaused(false)}
                      className="mt-3 border border-[#f5f0e8] px-4 py-2 text-sm"
                    >
                      Resume puzzle
                    </button>
                  </div>
                </div>
              )}
            </div>
            <p className="mt-4 text-center font-mono-custom text-xs text-[#6b6357]">
              {status === "won"
                ? "Solved. Beautifully done."
                : status === "lost"
                  ? "Three mistakes. Try the puzzle again."
                  : "Select a cell, then choose a number."}
            </p>
          </section>
          <aside className="border-t border-[#c8c2b4] pt-5 lg:border-t-0 lg:pt-0">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-9 lg:grid-cols-3">
              {Array.from({ length: 9 }, (_, index) => {
                const digit = index + 1;
                return (
                  <button
                    key={digit}
                    onClick={() => handleDigit(digit)}
                    className={`aspect-square border font-mono-custom text-lg transition-colors ${selectedDigit === digit ? "border-[#c0392b] bg-[#c0392b] text-[#f5f0e8]" : "border-[#c8c2b4] bg-[#ede8de] hover:border-[#1a1814]"} ${remaining[index] === 9 ? "opacity-35" : ""}`}
                    aria-label={`Place ${digit}`}
                  >
                    {digit}
                    <span className="block text-[9px] text-current opacity-60">
                      {9 - remaining[index]}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                onClick={() => setPencil((value) => !value)}
                className={`border px-3 py-2 text-xs ${pencil ? "border-[#c0392b] text-[#c0392b]" : "border-[#c8c2b4] text-[#6b6357]"}`}
              >
                ✎ Pencil {pencil ? "on" : "off"}
              </button>
              <button
                onClick={() => setFastMode((value) => !value)}
                className={`border px-3 py-2 text-xs ${fastMode ? "border-[#c0392b] text-[#c0392b]" : "border-[#c8c2b4] text-[#6b6357]"}`}
              >
                Fast mode
              </button>
              <button
                onClick={erase}
                className="border border-[#c8c2b4] px-3 py-2 text-xs text-[#6b6357] hover:border-[#1a1814]"
              >
                Erase
              </button>
              <button
                onClick={undo}
                disabled={!history.length}
                className="border border-[#c8c2b4] px-3 py-2 text-xs text-[#6b6357] hover:border-[#1a1814] disabled:opacity-40"
              >
                Undo
              </button>
            </div>
            <button
              onClick={useHint}
              disabled={status !== "playing"}
              className="mt-4 w-full bg-[#1a1814] px-4 py-3 text-sm text-[#f5f0e8] hover:bg-[#3d3830] disabled:opacity-40"
            >
              {hint === null
                ? "Give me a hint"
                : `Hint: cell ${hint + 1} is ${puzzle.solution[hint]}`}
            </button>
            {status !== "playing" && (
              <button
                onClick={() => startGame()}
                className="mt-2 w-full border border-[#1a1814] px-4 py-3 text-sm"
              >
                {status === "won" ? "Play another puzzle" : "Try again"}
              </button>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
}
