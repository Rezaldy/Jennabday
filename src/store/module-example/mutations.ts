import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  setPageTrue (state: ExampleStateInterface, name: string) {
    state.pages[name] = true;
  }
};

export default mutation;
