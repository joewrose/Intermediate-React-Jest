/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Pet from "../Pet";

test("Displays a default thumbnail", async () => {
  // Render our pet
  const pet = render(<Pet />);

  // Look at what was rendered to see if we can find a thumbnail
  const petThumbnail = await pet.findByTestId("thumbnail");

  // If no photo info is given, check if we display 'none.jpg'
  expect(petThumbnail.src).toContain("none.jpg");
});
