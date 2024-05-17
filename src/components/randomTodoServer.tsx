import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";

type Props = {};

const delay = (ms:number,val:any) =>  new Promise(resolve => setTimeout(resolve,ms,val));

const fetchTodos = async () => {
    try {
      await delay(2000,12);
      const resp = await axios.get('https://dummyjson.com/todos/random');
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };
const RandomTodoServer = async (props: Props) => {
  
    const res = await fetchTodos();
    console.log({res});
  return (<div>{res.todo}</div>)
};

export default RandomTodoServer;
