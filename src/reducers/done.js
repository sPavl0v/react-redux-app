const done = (state = [
  {id: 123, title: 'done1'},
  {id: 124, title: 'done2'},
  {id: 125, title: 'done3'},
], action) => {
  switch (action.type) {
    case 'SOMETHING_DONE':
      console.log('SOMETHING_DONE');
      return state;

    default:
      return state
  }
}

export default done
