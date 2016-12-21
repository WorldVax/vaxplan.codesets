declare module 'vaxplan.refdata' {
	/**
	 * Given an array of objects and a property name, return an object
	 * with properties for each of the items where the property name is the
	 * value of the item.name property and the value is the item.
	 *
	 * Huh?
	 */
	export function New(data: any[], name: string): any;
	/**
	 * Return a a list made up of the properties of the item.
	 */
	export function ToList(item: any): any[];
	/**
	 * Group a list of items by the property name.
	 */
	export function GroupBy(data: any[], name: string): {};

}
