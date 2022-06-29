import './style.scss';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import ApiItem from './components/ApiItem';
import Alert from './components/Alert';

function App() {

  const [search, setSearch] = useState("")
  const [apis, setApis] = useState([])

  useEffect(() => {
    fetch("https://62bb9fa1eff39ad5ee11ecf7.mockapi.io/api-list/reactaelita")
      .then(res => res.json())
      .then((data => setApis(data)))
  }, [])

  const bookmarks = apis.filter(api => api.bookmark === true)
  const filteredApis = apis.filter((api) => api.name.toLowerCase().includes(search.toLowerCase()))

  const toogleBookmark = (id) => {
    setApis(apis.map(api => {
      if (api.id === id) {
        api.bookmark = !api.bookmark
      }
      return api
    }))
  }


  return (
    <>
      <h3>
        A collective list of free APIs for use in <br /> software and web
        development.
      </h3>
      <Search search={search} setSearch={setSearch} placeholder="Find development, games, images APIs" />
      <article className='container'>
        <h4>Featured APIs of this week</h4>
        <section className='apiList'>
          {

            filteredApis.map(api => (
              <ApiItem toogleBookmark={toogleBookmark} api={api} key={api.id} />
            ))}
          {filteredApis.length === 0 && (
            <Alert message="API not found" />
          )}
        </section>
      </article>
      <div className='container'>
        <h4>Your bookmarks</h4>
        <section className='apiList'>
          {

            bookmarks.map(api => (
              <ApiItem toogleBookmark={toogleBookmark} api={api} key={api.id} />
            ))}
          {
            bookmarks.length === 0 && (
              <Alert message="There is no item on your bookmarks" />
            )
          }
        </section>
      </div>
    </>
  );
}

export default App;
