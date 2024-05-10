import { useEffect } from 'react';

const socket = () => {
  console.log('Call API');
}

const UnMount = () => {
  useEffect(() => {
    console.log('Component render');
    let idInvterval = setInterval(socket, 1000);

    // 👇 Clear các hàm chạy ngầm khi không cần thiết
    return () => {
      clearInterval(idInvterval);
      console.log('Component unmount or deps change');

    }
  }, [])
  return (
    <div>UnMount</div>
  )
}

export default UnMount;
