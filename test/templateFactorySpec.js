describe('templateFactory', function () {
  
  beforeEach(module('ui.state.util'));

  it('exists', inject(function ($templateFactory) {
    expect($templateFactory).toBeDefined();
  }));
});
