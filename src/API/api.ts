import axios from 'axios';

const url: string = 'http://localhost:5000';

const fetchTask = {
  async getTasks(user_id: number) {
    const {data} = await axios.get(`${url}/task/`, {params: {user_id: user_id}});
    return data;
  },
  async getTask(user_id: number, id: number) {
    const {data} = await axios.get(`${url}/task/${id}`, {params: {user_id: user_id}});
    return data;
  },
  async createTask(task: object) {
    const {data} = await axios.post(`${url}/task/`, task);
    return data;
  },
  async deleteTask(id: number) {
    await axios.delete(`${url}/task/`, {params: {id: id}});
  },
  async updateTask(id: number, task: object) {
    const {data} = await axios.put(`${url}/task/${id}`, task);
    return data;
  }
};

const fetchBoard = {
  async getBoards(user_id: number) {
    let {data} = await axios.get(`${url}/board/`, {params: {user_id: user_id}});
    return data;
  },
  async getBoard(user_id: number, id: number) {
    let {data} = await axios.get(`${url}/board/${id}`, {params: {user_id: user_id}});
    return data;
  },
  async createBoard(board: object) {
    const {data} = await axios.post(`${url}/board/`, board);
    return data;
  },
  async deleteBoard(id: number) {
    await axios.delete(`${url}/board/`, {params: {id: id}});
  },

  async updateBoard(board: object) {
    console.log({...board});

    let {data} = await axios.put(`${url}/board/`, {...board});
    return data;
  }
};
export {fetchTask, fetchBoard, url};
