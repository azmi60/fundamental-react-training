import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <Link to="/" class="btn btn-ghost normal-case text-xl">training</Link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabindex="0">
              <a>
                Categories
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2 bg-base-100 z-50">
                <li>
                  <Link to="/seafood">Seafood</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <main className="bg-base-300">
        <Outlet />
      </main>
    </>
  )
};

export default Layout;
