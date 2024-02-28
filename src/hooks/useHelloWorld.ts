import { useEffect } from "react";

const useHelloWorld = () => {
  useEffect(() => {
    console.log("hello world");
  }, []);
  return {};
};

export { useHelloWorld };
