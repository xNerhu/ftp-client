import { observable, action, computed } from 'mobx';

export class History {
  @observable
  protected list: string[] = [];

  @observable
  public pos = -1;

  @computed
  public get canGoBack() {
    return this.list.length && this.pos > 0;
  }

  @computed
  public get canGoForward() {
    return this.list.length && this.pos < this.list.length - 1;
  }

  @action
  public goBack() {
    if (this.canGoBack) {
      this.pos--;
    }
  }

  @action
  public goForward() {
    if (this.canGoForward) {
      this.pos++;
    }
  }

  @action
  public push(path: string) {
    if (path) {
      this.pos++;
      this.list = [...this.list.slice(0, this.pos), path];
    }
  }

  @computed
  public get path() {
    return this.list[this.pos];
  }
}