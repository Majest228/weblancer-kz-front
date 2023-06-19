import type { AppProps } from "next/app"
import "../styles/global.scss"
import { Provider } from "react-redux"
import AuthProvider from "../app/providers/AuthProvider"
import { TypeComponentAuthFields } from "../app/providers/private.route.interface"
import { wrapper } from "../app/store/store"
import "react-quill/dist/quill.snow.css"
import HeadProvider from "../app/providers/HeadProvider"
type TypeAppProps = AppProps & TypeComponentAuthFields

function App({ Component, ...rest }: TypeAppProps) {
  const { props, store } = wrapper.useWrappedStore(rest)
  return (
    <HeadProvider>
      <Provider store={store}>
        <AuthProvider Component={Component}>
          <Component {...props.pageProps} />
        </AuthProvider>
      </Provider>
    </HeadProvider>
  )
}

export default App
