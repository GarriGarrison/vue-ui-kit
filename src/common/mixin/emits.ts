// import type { ComponentPublicInstance } from 'vue';
// import type { VueComponent } from '../types/value';

export type Mount = 'mount';
export type MountEvent = (e: Mount) => void;

export const onMount = (emit: MountEvent): void => {
  emit('mount');
};

export type Unmount = 'unmount';
export type UnmountEvent = (e: Unmount) => void;

export const onUnmount = (emit: UnmountEvent): void => {
  emit('unmount');
};

// export type Focusin = 'focusin';
// export type FocusinEvent = (e: 'focusin') => void;

// export const onFocusin = (emit: FocusinEvent): void => {
//   emit('focusin');
// };

// export type Focusout = (e: 'focusout') => void;

// export const onFocusout = (emit: Focusout): void => {
//   emit('focusout');
// };

export type Click = 'click';
export type ClickEvent = (e: Click, event: MouseEvent) => void;

export const onClick = (emit: ClickEvent, event: MouseEvent): void => {
  emit('click', event);
};

// export type Keydown = (e: 'keydown', event: KeyboardEvent) => void;

// export const onKeydown = (emit: Keydown, event: KeyboardEvent): void => {
//   emit('keydown', event);
// };

// export type Change<T> = (e: 'change', value: T) => void;

// export const onChange = <T>(emit: Change<T>, value: T): void => {
//   emit('change', value);
// };

// export type ModelValueUpdated<T> = (e: 'model-value-updated', value: T) => void;

// export type Update<T> = ((e: 'update:modelValue', value: T) => void) & ModelValueUpdated<T>;

// export const onUpdateModelValue = <T>(emit: Update<T>, value: T): void => {
//   emit('update:modelValue', value);
//   emit('model-value-updated', value);
// };

// export type Search<T> = (e: 'search', query: T) => void;

// export const onSearch = <T>(emit: Search<T>, query: T): void => {
//   emit('search', query);
// };

// export type Input<T> = (e: 'input', value: T) => void;

// export const onInput = <T>(emit: Input<T>, value: T): void => {
//   emit('input', value);
// };

// export type FileAdd = (e: 'onFileAdd') => void;

// export const onFileAdd = (emit: FileAdd): void => {
//   emit('onFileAdd');
// };
// export type FileRemove = (e: 'onFileRemove') => void;

// export const onFileRemove = (emit: FileRemove): void => {
//   emit('onFileRemove');
// };

// export type Close = (e: 'close') => void;

// export const onClose = (emit: Close): void => {
//   emit('close');
// };

// export type BeforeEdit = (e: 'beforeEdit', value: unknown) => void;

// export const onBeforeEdit = (emit: BeforeEdit, value: unknown): void => {
//   emit('beforeEdit', value);
// };

// export type AfterEdit = (e: 'afterEdit', value: unknown) => void;

// export const onAfterEdit = (emit: AfterEdit, value: unknown): void => {
//   emit('afterEdit', value);
// };

// export type BeforeChange = (e: 'beforeChange', value: unknown) => void;

// export const onBeforeChange = (emit: BeforeChange, value: unknown): void => {
//   emit('beforeChange', value);
// };

// export type AfterChange = (e: 'afterChange', value: unknown) => void;

// export const onAfterChange = (emit: AfterChange, value: unknown): void => {
//   emit('afterChange', value);
// };

// export type Updated = (e: 'updated') => void;

// export const onUpdated = (emit: Updated): void => {
//   emit('updated');
// };

// export type Sort = (e: 'sort', value: string) => void;

// export const onSort = (emit: Sort, value: string): void => {
//   emit('sort', value);
// };

// export type QueryUpdate = (e: 'queryUpdate', value: string) => void;

// export const onQueryUpdate = (emit: QueryUpdate, value: string): void => {
//   emit('queryUpdate', value);
// };

// export type RowClick<T = ComponentPublicInstance> = (
//   e: 'rowClick',
//   row: Record<string, unknown>,
//   rowRef: VueComponent<T> | null,
// ) => void;

// export const onRowClick = <T = ComponentPublicInstance>(
//   emit: RowClick<T>,
//   row: Record<string, unknown>,
//   rowRef: VueComponent<T> | null,
// ): void => {
//   emit('rowClick', row, rowRef);
// };

// export type DragStart<T> = (e: 'dragStart', value: T) => void;

// export const onDragStart = <T>(emit: DragStart<T>, value: T): void => {
//   emit('dragStart', value);
// };

// export type DragEnd<T> = (e: 'dragEnd', value: T) => void;

// export const onDragEnd = <T>(emit: DragEnd<T>, value: T): void => {
//   emit('dragEnd', value);
// };

// export type NodeChoose<T> = (e: 'nodeChoose', value: T) => void;

// export const onNodeChoose = <T>(emit: NodeChoose<T>, value: T): void => {
//   emit('nodeChoose', value);
// };

// export type NodeCheck<T> = (e: 'nodeCheck', value: T, check: boolean) => void;

// export const onNodeCheck = <T>(emit: NodeCheck<T>, value: T, check: boolean): void => {
//   emit('nodeCheck', value, check);
// };

// export type NodeMounted<T> = (e: 'nodeMounted', value: T) => void;

// export const onNodeMounted = <T>(emit: NodeMounted<T>, value: T): void => {
//   emit('nodeMounted', value);
// };

// export type UpdateCheckedNodes<T> = (e: 'updateCheckedNodes', value: T) => void;

// export const onUpdateCheckedNodes = <T>(emit: UpdateCheckedNodes<T>, value: T): void => {
//   emit('updateCheckedNodes', value);
// };

// export type ChildrenShow = (e: 'childrenShow', id: string, show: boolean) => void;

// export const onChildrenShow = (emit: ChildrenShow, id: string, show: boolean): void => {
//   emit('childrenShow', id, show);
// };

// export type UpdatePage = (e: 'update:page', page: number) => void;

// export const onUpdatePage = (emit: UpdatePage, page: number): void => {
//   emit('update:page', page);
// };
