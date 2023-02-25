import style from './NumberList.module.css';

function ItemList({ id, name, number, deleteContact }) {
  return (
    <li key={id} className={style.item}>
      {name}, {number}{' '}
      <button
        className={style.button__delete}
        onClick={() => {
          deleteContact(id);
        }}
      >
        {' '}
        Delete{' '}
      </button>
    </li>
  );
}

export default ItemList;
