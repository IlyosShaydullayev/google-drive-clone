import Navbar from "@/components/shared/navbar";
import { ChildProps } from "@/types";

const AuthLayout = ({ children }: ChildProps) => {
  return (
    <div className="relative">
      <Navbar/>
      <div>SideBar</div>
      {children}
    </div>
  );
};

export default AuthLayout;
