type Props = {
  count: number;
  fill: boolean;
};

export default function HeartIcon({ count, fill }: Props) {
  return (
    <div className="flex items-center space-x-0.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill={fill ? 'currentColor' : 'none'}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-red-400"
      >
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
      <span className="text-sm text-red-400">{count.toLocaleString()}</span>
    </div>
  );
}
