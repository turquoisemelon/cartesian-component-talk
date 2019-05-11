it('should match the snapshot as a button', () => {
  expect(
    shallow(
      <Cartesian
        component={Button}
        componentChildren={['Button']}
        element={['button']}
        variant={['primary', 'secondary', 'transactional']}
        isSmall={[false, true]}
        icon={[undefined, ruler]}
      />
    ).html()
  ).toMatchSnapshot();
});