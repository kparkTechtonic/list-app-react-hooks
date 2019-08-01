import React, { useContext } from 'react';
import Context from '../Context';
// https://ant.design/components/list/


const Maindisplay = (match) => {
  const { state } = useContext(Context);
  const { data } = state;
  const id = (match.location.pathname.split('/:')[1]);

  function search(nameKey, myArray) {
    if (!nameKey || !myArray) return undefined;
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i]._id === nameKey) {
        return myArray[i];
      }
    }
  }
  const singleList = search(id, data);

  console.log(singleList)

  function populateArr(singleList) {
    if (!data){
      return(<div>Loading...</div>) 
    }
    if (typeof singleList !== 'object' || !singleList) {
      return undefined
    }
    if (singleList) {
      return (
        <ul>
          {singleList.listArr.map((keys,i) => (<div key = {i+keys}>{keys.text}</div>))}
        </ul>
        )
    }
  }

  // const setListToPopulate = async () => {
  //   const returnData = await getData();
  //   setState(
  //     returnData.map((element, i) => (
  //       <div key={i + element.title}>
  //         <div>{`list name: ${element.title}`}</div>
  //         <div>
  //           {`list made: ${new Date(element.time).getHours()}:${new Date(
  //             element.time,
  //           ).getMinutes()}:${new Date(element.time).getSeconds()}`}
  //         </div>
  //         <ul>
  //           {element.listArr.map(e => (
  //             <li key={e.text}>{e.text}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     )),
  //   );
  // };

  return (
    <div className="App">
      {populateArr(singleList)}
    </div>
  );
};

export default Maindisplay;



// ReactDOM.render(
//   <div>
//     <h3 style={{ margin: '16px 0' }}>Large Size</h3>
//     <List
//       size="large"
//       header={<div>Header</div>}
//       footer={<div>Footer</div>}
//       bordered
//       dataSource={data}
//       renderItem={item => <List.Item>{item}</List.Item>}
//     />
//   </div>,
//   mountNode,
// );