import { subreddits } from "./subreddits";

export function* rootSaga(){
    yield* subreddits()
}