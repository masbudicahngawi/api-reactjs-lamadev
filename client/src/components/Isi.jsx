import Menu2 from "./Mymenu";

export default function Isi() {
  let arr = [];
  function gen() {
    for (let i = 0; i < 100; i++) {
      arr.push(i);
    }

    return arr;
  }

  gen();

  return (
    <>
      <Menu2 />
      {arr.map((item, indeks) => (
        <p key={indeks}>Baris ke-{item}</p>
      ))}
    </>
  );
}
