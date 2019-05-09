import { cartesianProduct } from '../utils/cartesian-product'

const Cartesian = ({container = React.Fragment, component, ...props}) => {
  const combinations = cartesianProduct(props)
  const Component = component
  const Container = container

  return (
    <>
      {combinations.map(({ componentChildren, ...combinationProps }, i) => (
        <Container
          key={i}
          {...(Container ===  ? {} : { componentProps: combinationProps })}
        >
          {componentChildren
            ? <Component children={componentChildren} {...combinationProps} />
            : <Component {...combinationProps} />}
        </Container>
      ))}
    </>
  )
}