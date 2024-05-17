import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import RandomTodoServer from "../../components/randomTodoServer";

type Props = {};

const TodosPage = (props: Props) => {
  return <Suspense fallback={<div>Loading...............</div>}>
      <RandomTodoServer/>
  </Suspense>;
};

export default TodosPage;
