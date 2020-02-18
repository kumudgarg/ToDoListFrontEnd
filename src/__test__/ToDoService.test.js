import axios from 'axios';
import { getToDoLists } from './service/ToDoService';

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

    it('should return data', function () {

    });
});