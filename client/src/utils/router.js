import env from '../env'

let hyper

export const goto = (path) => {
  window.history.pushState(undefined, path, `${env.baseUrl}${path}`)
  if (hyper) {
    hyper.setPath(path)
  }
}

export const init = (_hyper) => {
  hyper = _hyper
  hyper.setPath(window.location.pathname || '/')
  window.onpopstate = (e) => {
    const path = e.pathname || window.location.pathname || '/'
    hyper.setPath(path)
  }
}
