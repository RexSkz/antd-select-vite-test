import Trigger from '@rc-component/trigger';

const App = () => (
  <Trigger
    popup={<span>popup</span>}
    popupAlign={{
      points: ['tl', 'bl'],
      offset: [0, 3]
    }}
  >
    <a href='#'>hover</a>
  </Trigger>
);

export default App;
