import { Header } from "@/components"
import { Badge, Button, Flex } from "@/elements"

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <Flex justifyContent="flex-start" gap="1rem" className="p-4">
        <Flex direction="column">
          <Button variant="primary">Create New Replay</Button>
          <Button variant="primary">View Controller</Button>

          <br />
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, earum doloribus! Eius
            nemo molestiae perferendis repellat corrupti odio quod qui sapiente dignissimos
            blanditiis in repudiandae nobis, tempora placeat quae itaque?
          </p>
          <h2 className="p-4 text-xl font-bold text-gray-900 dark:text-white">Recent Uploads</h2>
          <ol className="relative">
            <li className="mb-4 ml-4">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023-06-02 23:54:00
              </time>{" "}
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Controller 1 = Event recieved 0X2203.231212323
              </span>
            </li>
            <li className="mb-4 ml-4">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023-06-02 22:14:00
              </time>{" "}
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Controller 1 = Event recieved 0X2203.231212323
              </span>
            </li>
            <li className="mb-4 ml-4">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023-06-02 10:23:00
              </time>{" "}
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Controller 1 = Event recieved 0X2203.231212323
              </span>
            </li>
          </ol>
        </Flex>
        <Flex>
          <div className="container grid ">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2023-06-01 10:24 PM
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Local Tournament #32
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  <Badge>Ken</Badge>
                  <Badge>Win</Badge>
                  <Badge>vs Ryu</Badge>
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2023-05-29 8:24 PM
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Practice Session #4
                </h3>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2023-05-28 10:09 PM
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Practice Session #3
                </h3>
              </li>
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2023
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Local Tournament #31
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  <Badge>Ken</Badge>
                  <Badge>Win</Badge>
                  <Badge>vs Chun Li</Badge>
                </p>
              </li>
            </ol>
          </div>
        </Flex>
      </Flex>
    </div>
  )
}
