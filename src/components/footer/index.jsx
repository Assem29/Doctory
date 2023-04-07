import { Footer as AntFooter } from "antd/lib/layout/layout";

const Footer = () => {
  return (
    <AntFooter className="bg-transparent">
      <div className="container d-flex justify-content-center">
        All Right Received to <span className="text-blue mx-1 fw-bold "> Doctory&copy;</span> 2023
      </div>
    </AntFooter>
  );
};

export default Footer;
