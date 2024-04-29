import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const photos = [
    // pyrenees project
    // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-29%2B15.13.27Anton%2BBossoenbroek-30.jpg", mobile_blob: "", gallery_blob: "", sequence: 1, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-29%2B15.13.29Anton%2BBossoenbroek-34.jpg", mobile_blob: "", gallery_blob: "", sequence: 2, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-30%2B13.42.09Anton%2BBossoenbroek-29.jpg", mobile_blob: "", gallery_blob: "", sequence: 3, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-30%2B13.42.24Anton%2BBossoenbroek-33.jpg", mobile_blob: "", gallery_blob: "", sequence: 4, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-30%2B13.43.47Anton%2BBossoenbroek-56.jpg", mobile_blob: "", gallery_blob: "", sequence: 5, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-30%2B13.44.20Anton%2BBossoenbroek-65.jpg", mobile_blob: "", gallery_blob: "", sequence: 6, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-30%2B13.44.37Anton%2BBossoenbroek-70.jpg", mobile_blob: "", gallery_blob: "", sequence: 7, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-30%2B13.45.34Anton%2BBossoenbroek-86.jpg", mobile_blob: "", gallery_blob: "", sequence: 8, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-30%2B13.46.39Anton%2BBossoenbroek-104.jpg", mobile_blob: "", gallery_blob: "", sequence: 9, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-30%2B13.47.16Anton%2BBossoenbroek-114.jpg", mobile_blob: "", gallery_blob: "", sequence: 10, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    //   { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-30%2B13.47.44Anton%2BBossoenbroek-122.jpg", mobile_blob: "", gallery_blob: "", sequence: 11, caption: "Pyrénées", projectId: "d74def96-59d9-4bd5-b3bf-160915db06fb"},
    //
    //
    //   // 7rad project
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-06-11%2B18.09.462023-06-11%2B18.09.46DSCF4981%2B1.jpg", mobile_blob: "", gallery_blob: "", sequence: 20, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-06-18%2B18.14.152023-06-18%2B18.14.15DSCF5730.jpg", mobile_blob: "", gallery_blob: "", sequence: 21, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2" },
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-11-04%2B21.18.51CF002270.jpg", mobile_blob: "", gallery_blob: "", sequence: 3, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-11-16%2B05.52.54CF002940.jpg", mobile_blob: "", gallery_blob: "", sequence: 4, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-11-17%2B18.13.17CF003143.jpg", mobile_blob: "", gallery_blob: "", sequence: 5, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-11-18%2B09.31.43CF003209.jpg", mobile_blob: "", gallery_blob: "", sequence: 6, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-11-22%2B13.37.44CF003287.jpg", mobile_blob: "", gallery_blob: "", sequence: 7, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-01%2B05.24.17CF003585.jpg", mobile_blob: "", gallery_blob: "", sequence: 8, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-03%2B13.26.37CF003931.jpg", mobile_blob: "", gallery_blob: "", sequence: 9, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-05%2B06.47.03CF004005.jpg", mobile_blob: "", gallery_blob: "", sequence: 10, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-08%2B06.01.39CF004077.jpg", mobile_blob: "", gallery_blob: "", sequence: 11, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-08%2B14.37.02CF004092.jpg", mobile_blob: "", gallery_blob: "", sequence: 12, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-09%2B05.27.10CF004119.jpg", mobile_blob: "", gallery_blob: "", sequence: 13, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-09%2B15.10.35CF004313.jpg", mobile_blob: "", gallery_blob: "", sequence: 14, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-10%2B12.49.09CF004329.jpg", mobile_blob: "", gallery_blob: "", sequence: 15, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    // { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-15%2B20.13.02CF004540.jpg", mobile_blob: "", gallery_blob: "", sequence: 16, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    //   { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-15%2B20.57.15CF004553.jpg", mobile_blob: "", gallery_blob: "", sequence: 17, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    //   { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-16%2B10.58.41CF004631.jpg", mobile_blob: "", gallery_blob: "", sequence: 18, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    //   { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2023-12-17%2B05.51.49CF004768.jpg", mobile_blob: "", gallery_blob: "", sequence: 19, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
      { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2024-03-05%2B05.35.58CF005408.jpg", mobile_blob: "", gallery_blob: "", sequence: 1, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    //   { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2024-03-05%2B06.35.01CF005417.jpg", mobile_blob: "", gallery_blob: "", sequence: 2, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    //   { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2024-03-08%2B21.37.28CF005679.jpg", mobile_blob: "", gallery_blob: "", sequence: 23, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},
    //   { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2024-03-06%2B05.58.32CF005433%2B1.jpg", mobile_blob: "", gallery_blob: "", sequence: 22, caption: "7 Rad", projectId: "6b5bd872-1fa2-43d4-8a2e-b9c9b0eed2c2"},



      // // homepage: 2, caption: ""}
      // { desktop_blob: "https://assets.bossenbroek.photo/pyrenees/fullscreen/2021-07-29%2B15.13.27Anton%2BBossoenbroek-30.jpg", mobile_blob: "", gallery_blob: "", sequence: 1, caption: "", projectId: "70d18646-e6b3-40fd-a5b5-7967c6ed2702"},
      // { desktop_blob: "https://assets.bossenbroek.photo/industry/2021-10-29%2B08.06.33DSCF6814.jpg", mobile_blob: "", gallery_blob: "", sequence: 2, caption: "", projectId: "70d18646-e6b3-40fd-a5b5-7967c6ed2702"},
    { desktop_blob: "https://assets.bossenbroek.photo/7rad/fullscreen/2024-03-05%2B05.35.58CF005408.jpg", mobile_blob: "", gallery_blob: "", sequence: 3, caption: "", projectId: "70d18646-e6b3-40fd-a5b5-7967c6ed2702"},

      // Industry
      // { desktop_blob: "https://assets.bossenbroek.photo/industry/2021-10-29%2B08.06.33DSCF6814.jpg", mobile_blob: "", gallery_blob: "", sequence: 1, caption: "Industry", projectId: "91066b03-e644-416c-9932-5c47da5a6f40"},
      // { desktop_blob: "https://assets.bossenbroek.photo/industry/2021-11-03%2B17.37.29DSCF6830.jpg", mobile_blob: "", gallery_blob: "", sequence: 2, caption: "Industry", projectId: "91066b03-e644-416c-9932-5c47da5a6f40"},
      // { desktop_blob: "https://assets.bossenbroek.photo/industry/2022-01-08%2B09.31.35CF000619.jpg", mobile_blob: "", gallery_blob: "", sequence: 3, caption: "Industry", projectId: "91066b03-e644-416c-9932-5c47da5a6f40"},
      // { desktop_blob: "https://assets.bossenbroek.photo/industry/2022-01-08%2B09.44.35CF000654.jpg", mobile_blob: "", gallery_blob: "", sequence: 4, caption: "Industry", projectId: "91066b03-e644-416c-9932-5c47da5a6f40"},
      // { desktop_blob: "https://assets.bossenbroek.photo/industry/2022-01-09%2B11.06.12CF000937.jpg", mobile_blob: "", gallery_blob: "", sequence: 5, caption: "Industry", projectId: "91066b03-e644-416c-9932-5c47da5a6f40"},
      // { desktop_blob: "https://assets.bossenbroek.photo/industry/2022-01-09%2B11.12.51CF000949.jpg", mobile_blob: "", gallery_blob: "", sequence: 6, caption: "Industry", projectId: "91066b03-e644-416c-9932-5c47da5a6f40"},
      // { desktop_blob: "https://assets.bossenbroek.photo/industry/2022-01-11%2B13.23.29CF001008.jpg", mobile_blob: "", gallery_blob: "", sequence: 7, caption: "Industry", projectId: "91066b03-e644-416c-9932-5c47da5a6f40"},
      // { desktop_blob: "https://assets.bossenbroek.photo/industry/2022-01-18%2B21.26.10CF001254.jpg", mobile_blob: "", gallery_blob: "", sequence: 8, caption: "Industry", projectId: "91066b03-e644-416c-9932-5c47da5a6f40"},
      // { desktop_blob: "https://assets.bossenbroek.photo/industry/2022-12-17%2B18.27.52CF001540.jpg", mobile_blob: "", gallery_blob: "", sequence: 9, caption: "Industry", projectId: "91066b03-e644-416c-9932-5c47da5a6f40"},
  ];
  await prisma.$connect();

  // await prisma.photo.create({
  //   data: {
  //
  //         desktop_blob:
  //           "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-0.webp?alt=media&token=88428d6b-2dbe-4472-bb2e-4030dc076fc2",
  //         mobile_blob:
  //           "",
  //         gallery_blob:
  //           "",
  //         sequence: 2,
  //         caption: "",
  //         projectId: "2a4d508b-26c9-40f9-b8aa-8b69bf00d585"
  //       },
  //
  // });

  const project =
      {
          title: "7 Rad",
          isPublished: true,
          photos: {
              create: {
                  desktop_blob:
                      "https://7rad/fullscreen/2024-03-05%2B05.35.58CF005408.jpg",
                  mobile_blob:
                      "",
                  gallery_blob:
                      "",
                  sequence: 1,
                  caption: "7 Rad",
              },
          },
      }

    // Create multiple photos at once

        await prisma.photo.createMany({data: photos})

    // Create multiple projects at once
    // await prisma.project.create({data: project})


  // const allProjects = await prisma.project.findMany({
  //   include: {
  //     photos: true,
  //   },
  // });
  // console.dir(allProjects, { depth: null });

    // const allPhotos = await prisma.photo.findMany({
    //     where: {
    //         projectId: "2a4d508b-26c9-40f9-b8aa-8b69bf00d585",
    //     },
    // });
    // console.dir(allPhotos, { depth: null });

}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
