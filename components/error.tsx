type Props = {
  error: any;
};

export default function ErrorNotifier({ error }: Props) {
  return (
    <div>
      <h2>에러가 발생했어요!</h2>
      <p>{error.message}</p>
      <p>
        개발자 콘솔에서 네트워크 탭을 확인해서, 어떤 문제가 발생했는지
        확인해보세요!
      </p>
    </div>
  );
}
