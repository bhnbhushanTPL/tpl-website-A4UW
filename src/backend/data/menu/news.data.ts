import { commonnews} from "../common/common.news.data";

export const newsDb={

  getNewsListings(){
    let res=commonnews;
    return Promise.resolve(res);
  }
};
