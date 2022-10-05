/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Pet from "../Pet";

test("Displays a default thumbnail", async () => {
  // Render our pet
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );

  // Look at what was rendered to see if we can find a thumbnail
  const petThumbnail = await pet.findByTestId("thumbnail");

  // If no photo info is given, check if we display 'none.jpg'
  expect(petThumbnail.src).toContain("none.jpg");
});

test("Displays a non-default thumbnail", async () => {
  const pet = render(
    <StaticRouter>
      <Pet images={["1.jpg", "2.jpg", "3.jpg"]} />
    </StaticRouter>
  );

  const petThumbnail = await pet.findByTestId("thumbnail");

  expect(petThumbnail.src).toContain("1.jpg");
});
