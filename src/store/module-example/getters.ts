import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  getNameStatus (context, name: string): boolean {
    return context.pages[name];
  },

  getPages (context): { [key: string]: boolean} {
    return context.pages
  },

  getTotalStatus(context): {
    totalPages: number,
    donePages: number,
    donePercentage: number,
  } {
    const totalPages = context.pages;
    const donePages = Object.keys(context.pages).filter(
      function (name: string) {
        return context.pages[name] === true;
      }
    );

    const totalPagesLength: number = Object.keys(totalPages).length;
    const donePagesLength: number = Object.keys(donePages).length;

    return {
      totalPages: totalPagesLength,
      donePages: donePagesLength,
      donePercentage: (donePagesLength / totalPagesLength) * 100,
    };
  }
};

export default getters;
