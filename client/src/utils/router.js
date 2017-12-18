import env from '../env'

let hyper

export const goto = (path) => {
  window.history.pushState(undefined, path, `${env.basePath}${path}`)
  if (hyper) {
    hyper.setPath(path)
  }
}

export const init = (_hyper) => {
  hyper = _hyper
  hyper.setPath(withoutBase(window.location.pathname || '/'))
  window.onpopstate = (e) => {
    const path = e.pathname || window.location.pathname || '/'
    hyper.setPath(withoutBase(path))
  }
}

const withoutBase = (path) => {
  if (path.indexOf(env.basePath) === 0) {
    return path.substr(env.basePath.length)
  }
  return path
}
