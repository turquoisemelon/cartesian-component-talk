describe('axe-tests', () => {
  it("shouldn't have any accessibility violations as a button", async () => {
    const cartProps = {
      children: ['Test Button'],
      disabled: [true, false],
      element: ['button'],
      variant: ['primary', 'secondary', 'transactional'],
    };
    const results = await cartesianAxe(Button, cartProps);
    results.forEach((result: any) => {
      expect(result).toHaveNoViolations();
    });
  });
});