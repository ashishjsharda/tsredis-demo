import Redis from 'ioredis';

(async () => {
    const redis = new Redis();

    await redis.set('myKey', 'Hello, Redis with TypeScript!');
    const value = await redis.get('myKey');
    console.log('Value:', value);

    const userKey = 'user:123';
    await redis.hset(userKey, 'name', 'Ashish');
    await redis.hset(userKey, 'age', '30');

    const userData = await redis.hgetall(userKey);
    console.log('User Data:', userData); // User Data: { name: 'Alice', age: '30' }


    const listKey = 'myList';
    await redis.rpush(listKey, 'item1', 'item2', 'item3');

    const listLength = await redis.llen(listKey);
    console.log('List Length:', listLength);

    const listItems = await redis.lrange(listKey, 0, -1);
    console.log('List Items:', listItems);


    redis.disconnect();
})();
