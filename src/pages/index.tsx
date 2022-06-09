/* eslint-disable prettier/prettier */
import s from './Map.module.css';
import { useState } from 'react';
import { Feed, Card } from 'src/components';
import Image from 'next/image'

export default function Home() {

  let arr = Array.from(Array(60), () => new Array(93).fill(0));

  arr[0].fill(1, 53, 61);
  arr[1].fill(1, 48, 49);
  arr[1].fill(1, 53, 62);
  arr[2].fill(1, 45, 62);
  arr[3].fill(1, 12, 22);
  arr[3].fill(1, 45, 63);
  arr[4].fill(1, 12, 26);
  arr[4].fill(1, 44, 64);
  arr[5].fill(1, 9, 10);
  arr[5].fill(1, 11, 29);
  arr[5].fill(1, 30, 31);
  arr[5].fill(1, 32, 33);
  arr[5].fill(1, 36, 37);
  arr[5].fill(1, 44, 63);
  arr[6].fill(1, 9, 37);
  arr[6].fill(1, 39, 42);
  arr[6].fill(1, 44, 63);
  arr[7].fill(1, 9, 43);
  arr[7].fill(1, 44, 63);
  arr[8].fill(1, 9, 65);
  arr[8].fill(1, 66, 67);
  arr[9].fill(1, 10, 67);

  arr[10].fill(1, 10, 68);
  arr[11].fill(1, 11, 69);
  arr[12].fill(1, 11, 69);
  arr[13].fill(1, 11, 69);
  arr[14].fill(1, 11, 69);
  arr[15].fill(1, 11, 69);
  arr[15].fill(1, 71, 72);
  arr[15].fill(1, 79, 80);
  arr[16].fill(1, 9, 75);
  arr[16].fill(1, 76, 80);
  arr[17].fill(1, 8, 80);
  arr[18].fill(1, 7, 82);
  arr[18].fill(1, 83, 84);
  arr[19].fill(1, 6, 82);
  arr[19].fill(1, 83, 86);

  arr[20].fill(1, 4, 88);
  arr[21].fill(1, 4, 90);
  arr[22].fill(1, 3, 92);
  arr[23].fill(1, 3, 93);
  arr[24].fill(1, 4, 93);
  arr[25].fill(1, 4, 92);
  arr[26].fill(1, 2, 91);
  arr[27].fill(1, 2, 92);
  arr[28].fill(1, 2, 91);
  arr[29].fill(1, 1, 91);

  arr[30].fill(1, 1, 91);
  arr[31].fill(1, 1, 25);
  arr[31].fill(1, 31, 91);
  arr[32].fill(1, 3, 22);
  arr[32].fill(1, 33, 92);
  arr[33].fill(1, 4, 5);
  arr[33].fill(1, 6, 22);
  arr[33].fill(1, 35, 91);
  arr[34].fill(1, 14, 17);
  arr[34].fill(1, 37, 91);
  arr[35].fill(1, 15, 16);
  arr[35].fill(1, 37, 86);
  arr[36].fill(1, 37, 84);
  arr[37].fill(1, 37, 84);
  arr[38].fill(1, 38, 84);
  arr[39].fill(1, 39, 84);

  arr[40].fill(1, 39, 83);
  arr[41].fill(1, 39, 81);
  arr[42].fill(1, 39, 79);
  arr[43].fill(1, 41, 77);
  arr[44].fill(1, 41, 72);
  arr[44].fill(1, 73, 74);
  arr[45].fill(1, 41, 45);
  arr[45].fill(1, 49, 50);
  arr[45].fill(1, 53, 70);
  arr[46].fill(1, 36, 45);
  arr[46].fill(1, 52, 67);
  arr[47].fill(1, 36, 44);
  arr[47].fill(1, 52, 60);
  arr[47].fill(1, 61, 62);
  arr[47].fill(1, 63, 66);
  arr[48].fill(1, 36, 44);
  arr[48].fill(1, 54, 55);
  arr[48].fill(1, 58, 59);
  arr[48].fill(1, 60, 62);
  arr[48].fill(1, 64, 67);
  arr[49].fill(1, 35, 43);
  arr[49].fill(1, 60, 65);

  arr[50].fill(1, 35, 42);
  arr[50].fill(1, 59, 65);
  arr[51].fill(1, 34, 41);
  arr[51].fill(1, 56, 66);
  arr[52].fill(1, 32, 33);
  arr[52].fill(1, 34, 39);
  arr[52].fill(1, 55, 68);
  arr[53].fill(1, 33, 37);
  arr[53].fill(1, 39, 40);
  arr[53].fill(1, 54, 67);
  arr[53].fill(1, 70, 75);
  arr[54].fill(1, 34, 35);
  arr[54].fill(1, 39, 40);
  arr[54].fill(1, 57, 74);
  arr[55].fill(1, 59, 69);
  arr[55].fill(1, 70, 74);
  arr[56].fill(1, 60, 68);
  arr[57].fill(1, 59, 65);
  arr[58].fill(1, 59, 64);
  arr[59].fill(1, 59, 63);

  // const [person, setPerson] = useState({
  //   id: 'andrij-040',
  //   name: 'Andriy',
  //   avatar: 'img/heroes/sol2.png',
  //   description: "Історія",
  //   position: [5, 30],
  // });

  const Heroes = [
    {
      id: '0',
      name: 'Ivan',
      avatar: '/sol1.png', 
      description: "Історія",
      position: [2, 60],
    },
    {
      id: '1',
      name: 'Roman',
      avatar: '/sol2.png',
      description: "Історія",
      position: [3, 12],
    },
    {
      id: '2',
      name: 'Валентин',
      avatar: '/heroes/sol1.png',
      description: "Історія",
      position: [10, 30],
    },
    {
      id: '3',
      name: 'Андрій',
      avatar: '/heroes/sol1.png',
      description: "Історія",
      position: [11, 30],
    },
    {
      id: '4',
      name: 'Максим',
      avatar: '/heroes/sol1.png',
      description: "Історія",
      position: [10, 31],
    },
    {
      id: '5',
      name: 'Володимир',
      avatar: '/heroes/sol1.png',
      description: "Історія",
      position: [40, 58],
    },
  ];

  // const clickPhoto = (e) => {
  //   e.preventDefault();
  //   const personclick = memories.filter((el) => el.id === e.target.id);

  //   setPerson(personclick[0]);
  // };

  // const Avatar = (link) => {
  //   return <Image src={link} alt="avatar" />
  // }

  // const zoomAvatar = (id) = {
  //     document.getElementById(id).classList.add("mystyle"); 
      
  // }


  return (
    <div className={s.containerBody}>
      <div className={s.containerZoom}>
        <div className={s.gridRowMap}>
          { arr.map((row, index1) => {
            return row.map((heroe, index2) => {

              if (heroe === 0) {
                return (
                  <div
                    key={`${index1} ${index2}`}
                    className={`s.circleFrame${heroe}`}
                  ></div>
                );
                
              } else {
                const res = Heroes.filter((avatar) => avatar.position[0] === index1 && avatar.position[1] === index2)
                if (res[0]?.avatar) {
                  return (
                    <div key={`${index1} ${index2}`} className={s.circleFramePhoto}
                    id={res[0].id}
                    //   style={{ 
                    //     backgroundImage: "url(" + `${require('/heroes/sol2.png')}` + ")",
                    //   }}
                    //   id={res[0].id}
                    >
                      {/* <Image src={`/img/add-user.svg`} alt="avatar" width={5} height={5}/> */}
                    </div>
                    )
                  } else {
                      return (
                        <div
                          key={`${index1} ${index2}`}
                          className={s.circleFrameAdd}
                        ></div>
                      );
                  }
                } //first else
              });
            })
          }
        </div>

        <Feed>
          { Heroes.slice(0,5).map(heroe => <Card {...heroe}  key={`${heroe.id}-card`}    
            onMouseEnter={() => {document.getElementById(heroe.id).classList.add(`${s.zoomAvatar}`)} }
            onMouseLeave={() => {document.getElementById(heroe.id).classList.remove(`${s.zoomAvatar}`)} }
         />)
         }
        </Feed>
      </div>
    </div>
  );
}
