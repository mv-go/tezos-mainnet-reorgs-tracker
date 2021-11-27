/**
 * Dummy class to help with Vue dev-time prop type checking.
 */
export class ReorgItem {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    public readonly id: number,
    public readonly from: number,
    public readonly to: number,
    public readonly date: string,
  ) {}
}
