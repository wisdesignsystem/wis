import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";

export default function useObserverResize<T extends Element>(
	elementRef: RefObject<T>,
	debounceTimeout = 100,
) {
	const observerRef = useRef<ResizeObserver | null>(null);
	const [rect, setRect] = useState();

	useEffect(() => {
		const handle = debounce((entries) => {
			const domRect = entries[0].contentRect;
			setRect(domRect);
		}, debounceTimeout);

		observerRef.current = new window.ResizeObserver(handle);

		return () => {
			handle.cancel();
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, [debounceTimeout]);

	useEffect(() => {
		if (elementRef.current) {
			if (observerRef.current) {
				observerRef.current.observe(elementRef.current);
			}
		}
	}, [elementRef.current]);

	return rect;
}
