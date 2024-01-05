import React from "react";
import { NextPageContext } from "next/types";
import { Store } from "@reduxjs/toolkit";
import { increment } from "@/redux/count";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux";

type pageProps = NextPageContext & {
  store: Store;
}

const Home = () => {
  const count = useSelector((state:RootState) => state.count.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch(increment())}>increase</button>
    </div>
  )
}

Home.getInitialProps = (context: pageProps) => {
  const {store} = context;
  store.dispatch(increment());

  return {data: ''};
}

export default Home;
