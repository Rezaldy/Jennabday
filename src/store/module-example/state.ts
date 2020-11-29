export interface ExampleStateInterface {
  pages: {
    [key: string]: boolean,
  }
}

const state: ExampleStateInterface = {
  pages: {
    rizky: false,
    kho: false,
    kevin: false,
    evan: false,
    oscar: false,
  }
};

export default state;
