export default function Isi() {
  let arr = [];
  function gen() {
    for (let i = 0; i < 100000; i++) {
      arr.push(i);
    }

    return arr;
  }

  gen();

  return (
    <>
      {arr.map((item, indeks) => (
        <p key={indeks}>Baris ke-{item}</p>
      ))}
    </>
  );
}
