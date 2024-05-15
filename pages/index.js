import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { updateNumber } from "../redux/actions/demoSlice";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [num, updateNum] = useState(0);
  const { number } = useSelector((state) => state.demo);
  const dispatch = useDispatch();
  const updateNumberInStore = () => {
    dispatch(updateNumber({ number: num }));
  };
  return (
    <div>
    hello
    </div>

  );
}
