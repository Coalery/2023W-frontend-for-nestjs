type Props = {
  count: number;
};

export default function BookmarkIcon({ count }: Props) {
  return (
    <div className="flex items-center space-x-0.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-amber-400"
      >
        <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
      </svg>
      <span className="text-sm text-amber-400">{count.toLocaleString()}</span>
    </div>
  );
}
