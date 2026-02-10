export default function Login() {
  return (
    <div className="items-center">
      <div className="bg-white w-[60%] text-center">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div className="text-2xl font-bold">Login Details</div>
          <div className="flex flex-col w-[400px] text-xl">
            <label htmlFor="">Email </label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Password </label>
            <input type="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
