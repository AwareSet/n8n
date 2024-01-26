import { Semaphore } from '@/Semaphore';

beforeAll(() => {
	jest.useFakeTimers();
});

afterAll(() => {
	jest.useRealTimers();
});

describe('Semaphore', () => {
	test('should limit concurrency', async () => {
		const semaphore = new Semaphore(1);

		// eslint-disable-next-line @typescript-eslint/promise-function-async
		const sleep = jest.fn(() => new Promise((resolve) => setTimeout(resolve, 500)));
		const testFn = async () => {
			await semaphore.acquire();
			await sleep();
			semaphore.release();
		};

		void Promise.all([testFn(), testFn(), testFn()]);

		expect(sleep).toHaveBeenCalledTimes(0);

		await jest.advanceTimersByTimeAsync(400);
		expect(sleep).toHaveBeenCalledTimes(1);

		await jest.advanceTimersByTimeAsync(99);
		expect(sleep).toHaveBeenCalledTimes(1);

		await jest.advanceTimersByTimeAsync(500);
		expect(sleep).toHaveBeenCalledTimes(2);

		await jest.advanceTimersByTimeAsync(500);
		expect(sleep).toHaveBeenCalledTimes(3);
	});
});
