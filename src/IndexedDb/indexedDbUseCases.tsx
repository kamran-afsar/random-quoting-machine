import * as React from 'react';
import { IndexedDb } from '../indexedDb';

export const IndexedDbExample = () => {
        React.useEffect(() => {
            const runIndexDb = async () => {
                const indexedDb = new IndexedDb('test');
                await indexedDb.createObjectStore(['books', 'students']);
                await indexedDb.putValue('books', { name: 'A Game of Thrones' });
                await indexedDb.putBulkValue('books', [{ name: 'A Song of Fire and Ice' }, { name: 'Harry Potter and the Chamber of Secrets' }]);
                await indexedDb.getValue('books', 1);
                await indexedDb.getAllValue('books');
                await indexedDb.deleteValue('books', 1);
            }
            runIndexDb();
        }, []);
        return (<React.Fragment></React.Fragment>)
}