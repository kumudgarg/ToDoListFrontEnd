import axios from 'axios';
import {addToDo, deleteToDo, getToDoLists, updateToDo} from '../service/ToDoService';

jest.mock('axios');
describe('getToDoLists', () => {
    it('fetches successfully data from an API', () => {
        let data = {
            data: {
                hits: [
                    {
                        objectID: '1',
                        description: 'a',
                    },
                    {
                        objectID: '2',
                        description: 'b',
                    },
                ],
            },
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        return getToDoLists().then( data => expect(data).toEqual(data))
    });

    it('fetches erroneously data from an API', () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        expect(getToDoLists()).rejects.toThrow(errorMessage);
    });

    it('add todo successfully from ui to api', () => {
        let data = {
            status : 200,
            message : null
        };
        axios.post.mockImplementationOnce(() => Promise.resolve(data));
        return addToDo().then( data => expect(data).toEqual(data))
    });

    it('delete todo successfully from ui to api', () => {
        let data = {
            status : 200,
            message : null
        };
        axios.delete.mockImplementationOnce(() => Promise.resolve(data));
        return deleteToDo().then( data => expect(data).toEqual(data))
    });

    it('error on delete api', () => {
        const errorMessage = 'does not exist';
        axios.delete.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        expect(deleteToDo(30)).rejects.toThrow(errorMessage);
    });

    it('update todo successfully from ui to api', () => {
        let data = {
            status : 200,
            message : null
        };
        let updatedToDo = {
            completed: false,
            description: "updated text"
        }
        axios.put.mockImplementationOnce(() => Promise.resolve(data));
        return updateToDo(updatedToDo).then( data => expect(data).toEqual(data))
    });

    it('error on update api', () => {
        let updatedToDo = {
            completed: false,
            description: "updated text"
        }
        const errorMessage = 'does not exist';
        axios.put.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
        expect(updateToDo(updatedToDo)).rejects.toThrow(errorMessage);
    });

});