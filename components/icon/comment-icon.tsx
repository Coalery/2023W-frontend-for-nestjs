type Props = {
  count: number;
};

export default function CommentIcon({ count }: Props) {
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
        className="h-5 w-5 text-blue-400"
      >
        <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
      </svg>
      <span className="text-sm text-blue-400">{count.toLocaleString()}</span>
    </div>
  );
}
