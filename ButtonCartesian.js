const ButtonCartesian = () => (
  <>
    <Cartesian
      container={DisplayWithProps}
      component={Button}
      componentChildren={['Button']}
      element={['button']}
      variant={['primary', 'secondary', 'transactional']}
      isSmall={[false, true]}
      icon={[undefined, ruler]}
    />
  </>
)