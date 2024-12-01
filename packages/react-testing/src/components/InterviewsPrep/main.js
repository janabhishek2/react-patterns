class Item {
    title = 'ball';
    getCan() {
        return 'can';
    }
    getItem ()  {
       const f = () => {
        console.log(this);
       }
       f();
    }
};

const item = new Item();
item.getItem();
