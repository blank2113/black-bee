import './AddCategoryPanel.css'

function AddCategoryPanel() {
  return (
    <div className='AddCategoryPanel'>
        <div className='addProdWindow-inner'>
            <p>Добавить новую категорию</p>
            <form>
                <label htmlFor="name">Имя:</label>
                <input type="text" name='name'/>
            </form>
            <div className='btns'>
                <button className='create-btn'>Добавить</button>
                <button className='reset-btn'>Оменить</button>
            </div>
        </div>
    </div>
  )
}

export default AddCategoryPanel